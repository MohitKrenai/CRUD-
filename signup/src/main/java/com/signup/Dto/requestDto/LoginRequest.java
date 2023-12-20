package com.signup.Dto.requestDto;

import lombok.Data;

@Data

public class LoginRequest {
	private int id;
	private String firstName;
	private String lastName;
	private String PhoneNo;
	private String email;
	private String password;
}
