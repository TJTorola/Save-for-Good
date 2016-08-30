json.user do
	json.id        current_user.id
	json.email     current_user.email
	json.firstName current_user.first_name
	json.lastName  current_user.last_name
end