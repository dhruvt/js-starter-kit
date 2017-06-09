import {getUsers} from './api/userApi';

getUsers().then(result=>{
	let usersBody="";

	result.forEach(users=>{
		usersBody+=`<tr>
			<td><a href="#" data-id="${users.id}" clasee = "deleteUser">Delete User</a></td>
			<td>${users.id}</td>
			<td>${users.firstName}</td>
			<td>${users.lastName}</td>
			<td>${users.email}</td>
			</tr>`
	});

	global.document.getElementById('users').innerHTML = usersBody;
})
