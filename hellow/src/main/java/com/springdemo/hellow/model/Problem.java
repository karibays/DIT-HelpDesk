package com.springdemo.hellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.springdemo.hellow.requests.ProblemRequest;
import lombok.*;

import javax.persistence.*;

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

    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "status_id", columnDefinition = "1")
    private Status status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Problem(ProblemRequest problemRequest) {
        this.title = problemRequest.getTitle();
        this.description = problemRequest.getDescription();
        this.user = problemRequest.getUser();
    }
}
