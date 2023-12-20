package com.signup.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.signup.Dto.requestDto.LoginRequest;
import com.signup.Dto.responceDto.LoginResponce;
import com.signup.entity.Login;
import com.signup.repository.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository loginrepository;
	LoginResponce loginresponce = new LoginResponce();
	
	public ResponseEntity<String> addData(LoginRequest loginRequest) throws Exception{
		if(loginRequest.getFirstName()=="") throw new Exception("Please Enter Data");
		Login login =  loginresponce.responcemap(loginRequest);
		loginrepository.save(login);
		return new ResponseEntity<String>("Data add successfully",HttpStatus.OK);
	}
	
	public ResponseEntity<LoginRequest> getDataById(int id) {
		Login login = loginrepository.findById(id).get();
		LoginRequest loginRequest = loginresponce.requestmap(login);
		
		return new ResponseEntity<LoginRequest>(loginRequest, HttpStatus.OK);
	}
	
	public ResponseEntity<LoginRequest> updateData(LoginRequest loginRequest) {
		Login login = loginrepository.findById(loginRequest.getId()).get();
		
		login.setEmail(loginRequest.getEmail());
		login.setFirstName(loginRequest.getFirstName());
		login.setLastName(loginRequest.getLastName());
		login.setPhoneNo(loginRequest.getPhoneNo());
		login.setPassword(loginRequest.getPassword());
		loginrepository.save(login);
		return new ResponseEntity<LoginRequest>(loginRequest, HttpStatus.OK);
		
	}
	
	public void deleteDataById(int id) {
		if(loginrepository.existsById(id)) {
			loginrepository.deleteById(id);
		}
	}

	public List<Login> getAll() {		
		List<Login> loginRequests =  loginrepository.findAll();
		return loginRequests;
	}
}
