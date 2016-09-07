class Api::PaymentsController < ApplicationController
	def create
		total = get_total

		# Do some stripe magic here
		payment = Payment.new({
			stripe_id: payment_params[:stripe_key],
			amount: total,
			card_brand: 'visa',
			last_four: '4646'
		})

		if current_user.payments.push(payment)
			contributions = get_contributions(payment)

			if Contribution.create(contributions)
				render json: {}
			else
				render_errors(400, contributions)
			end
		else
			debugger
			render_errors(400, payment)
		end
	end

	private

	def get_contributions(payment)
		contributions = []
		payment_params[:contributions].each do |_, contribution|
			contributions.push({
				user_id: current_user.id,
				payment_id: payment.id,
				loan_id: contribution[:loan][:id],
				amount: contribution[:amount],
				donation: payment_params[:donation]
			})
		end
		contributions
	end

	def get_total
		total = 0
		payment_params[:contributions].each do |_, contribution|
			total += contribution[:amount].to_i
		end
		total
	end

	def payment_params
		params.require(:payment).permit(
			:stripe_key,
			:donation,
			contributions: [
				:amount, 
				loan: [
					:id,
					:amount,
					:entrepreneurId, 
					:name, 
					:location
				]
			]
		)
	end
end
