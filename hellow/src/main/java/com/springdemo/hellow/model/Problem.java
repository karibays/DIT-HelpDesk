package com.springdemo.hellow.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.springdemo.hellow.repository.Views;
import com.springdemo.hellow.requests.ProblemRequest;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@JsonView
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "problems")
public class Problem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Views.MyResponseViews.class)
    private Long problemId;
    @JsonView({Views.MyResponseViews.class})
    private String title;
    @JsonView(Views.MyResponseViews.class)
    private String description;
    @JsonView({Views.MyResponseViews.class})
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;

    public Problem(ProblemRequest problemRequest) {
        this.title = problemRequest.getTitle();
        this.description = problemRequest.getDescription();
        this.date = problemRequest.getDate();
        this.user = problemRequest.getUser();
    }

}
