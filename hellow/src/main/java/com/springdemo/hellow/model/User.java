package com.springdemo.hellow.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.springdemo.hellow.repository.Views;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@JsonView
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    @JsonView(Views.UserIdResponseViews.class)
    private Long id;
    private int barcode;

    public User(Long id){
        this.id = id;
    }
}
