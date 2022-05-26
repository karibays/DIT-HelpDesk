package com.springdemo.hellow.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "problems")
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long problemId;
    private String title;
    private String description;

    private Date date;

    public Problem(ProblemRequest problemRequest){
        this.title = problemRequest.getTitle();
        this.description = problemRequest.getDescription();
        this.date = problemRequest.getDate();

    }
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "userId")
//    private User user;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "statusId")
//    private Status status;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "categoryId")
//    private Category category;

}
