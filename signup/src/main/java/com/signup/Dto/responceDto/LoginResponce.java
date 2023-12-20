package com.signup.Dto.responceDto;

import com.signup.Dto.requestDto.LoginRequest;
import com.signup.entity.Login;

public class LoginResponce {
	public Login responcemap(LoginRequest loginRequest) {
		Login login = new Login();
		login.setFirstName(loginRequest.getFirstName());
		login.setLastName(loginRequest.getLastName());
		login.setEmail(loginRequest.getEmail());
		login.setPhoneNo(loginRequest.getPhoneNo());
		login.setPassword(loginRequest.getPassword());
		return login;
		
	}
	
	public LoginRequest requestmap(Login login) {
		LoginRequest loginRequest = new LoginRequest();
		loginRequest.setId(login.getId());
		loginRequest.setFirstName(login.getFirstName());
		loginRequest.setLastName(login.getLastName());
		loginRequest.setEmail(login.getEmail());
		loginRequest.setPhoneNo(login.getPhoneNo());
		loginRequest.setPassword(login.getPassword());
		return loginRequest;
		
	}
	
}
