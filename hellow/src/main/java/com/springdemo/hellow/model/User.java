package com.springdemo.hellow.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.springdemo.hellow.model.enums.Role;
import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(unique = true, nullable = false)
    private Long barcode;

    private String firstname;
    //hibernateLazyInitializer
    private String lastname;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;
//    @Builder.Default
//    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY, mappedBy = "user")
//    private List<Problem> problems = new ArrayList<>();


}
