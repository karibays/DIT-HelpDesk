package com.springdemo.hellow.model.enums;

import java.io.Serializable;

public interface BaseEntity  <T extends Serializable>{

    T getId();

    void setId(T id);
}
