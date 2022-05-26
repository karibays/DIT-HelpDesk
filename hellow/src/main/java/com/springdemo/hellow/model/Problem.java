package com.springdemo.hellow.model;

import com.springdemo.hellow.requests.ProblemRequest;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Problem(ProblemRequest problemRequest){
        this.title = problemRequest.getTitle();
        this.description = problemRequest.getDescription();
        this.date = problemRequest.getDate();
        this.user = problemRequest.getUser();
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
