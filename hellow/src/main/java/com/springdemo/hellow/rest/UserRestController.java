package com.springdemo.hellow.rest;


import com.springdemo.hellow.dto.barcode.BarcodeUserDto;
import com.springdemo.hellow.dto.useradmin.AdminCreateDto;
import com.springdemo.hellow.dto.useradmin.AdminEditDto;
import com.springdemo.hellow.dto.useradmin.AdminReadDto;
import com.springdemo.hellow.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://10.1.11.249:3000",allowedHeaders = "*")
@RequiredArgsConstructor
public class UserRestController {

    private final UserService userService;

    @GetMapping("barcode/{barcode}")
    public BarcodeUserDto findByBarcode(@PathVariable("barcode") Long barcode){
        return userService.findByBarcode(barcode)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("createAdmin")
    public AdminReadDto createAdmin(@RequestBody AdminCreateDto adminCreateDto){
        return userService.create(adminCreateDto);

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserByID(@PathVariable("id") Long id){
        if (!userService.delete(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public AdminReadDto update(@PathVariable("id") Long id,
                                 @RequestBody AdminEditDto adminEditDto){
        return userService.update(id, adminEditDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/roleUser")
    public List<AdminReadDto> findRoleUser(){
        return userService.findAllUsersByRole();
    }

    @GetMapping("/roleAdmin")
    public List<AdminReadDto> findRoleAdmin(){
        return userService.findAllAdminsByRole();
    }


}
