package com.springdemo.hellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.springdemo.hellow.requests.ProblemRequest;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(
        {"hibernateLazyInitializer", "handler"}
)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table()
public class Problem extends AuditingEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String question;

    private String action;

    private String consequences;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "status_id", columnDefinition = "1")
    private Status status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "problem")
    private List<Comment> comments = new ArrayList<>();

    public Problem(ProblemRequest problemRequest) {
        this.title = problemRequest.getTitle();
        this.question = problemRequest.getQuestion();
        this.action = problemRequest.getAction();
        this.consequences = problemRequest.getConsequences();
        this.user = problemRequest.getUser();
    }
}
