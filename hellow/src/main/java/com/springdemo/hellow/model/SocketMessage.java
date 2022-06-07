package com.springdemo.hellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.*;
import lombok.extern.jackson.Jacksonized;

import javax.persistence.*;
import java.util.Date;
@JsonIgnoreProperties(
        {"hibernateLazyInitializer", "handler"}
)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table()
public class SocketMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    private String message;
    private Date date;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "problem_id")
    private Problem problem;
}
