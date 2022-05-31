package com.springdemo.hellow.model;

import com.springdemo.hellow.requests.ProblemImageRequest;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

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
    private byte[] image;
    private Date date;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "problemid")
    private Problem problem;

    public ProblemImage(ProblemImageRequest problemImageRequest){
        this.image = problemImageRequest.getImage();
        this.date = problemImageRequest.getDate();

    }
}
