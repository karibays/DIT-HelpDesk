package com.springdemo.hellow.requests;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@org.springframework.stereotype.Service
public class UserRequest {
    private int barcode;

}
