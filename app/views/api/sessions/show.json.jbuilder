json.user do
	json.id    current_user.id
	json.email current_user.email
	json.name  current_user.name
end