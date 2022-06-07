package com.springdemo.hellow.model.enums;


import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ADMIN,
    USER,
    SUPERADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}
