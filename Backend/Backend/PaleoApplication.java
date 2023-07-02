package com.example.paleo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan()


public class PaleoApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaleoApplication.class, args);
	}

}
