package com.signup.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.signup.Dto.requestDto.LoginRequest;
import com.signup.entity.Login;
import com.signup.services.LoginService;

@RestController
@CrossOrigin
@RequestMapping("/data")
public class LoginController {
	@Autowired
	LoginService loginService;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody() LoginRequest loginRequest)throws Exception {
		return loginService.addData(loginRequest);
	}
	
	@GetMapping("getAll")
	public List<Login> getAll(){
		return loginService.getAll();
	}
	@GetMapping("/get")
	public ResponseEntity<LoginRequest> getDataById(@RequestParam(name="id") int id) {
		return loginService.getDataById(id);
	}
	
	@PutMapping("/update")
	public ResponseEntity<LoginRequest> updateDataByEmail(@RequestBody() LoginRequest loginRequest){
		return loginService.updateData(loginRequest);
	}
	@DeleteMapping("/delete")
	public void deleteById(@RequestParam(name="id") int id) {
		loginService.deleteDataById(id);
	}  

}
