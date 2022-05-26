package com.springdemo.hellow.model;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "problem_images")
public class ProblemImage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long problemImageId;
    private String image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "problemid")
    private Problem problem;
}
