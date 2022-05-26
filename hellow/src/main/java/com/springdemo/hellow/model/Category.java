package com.springdemo.hellow.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category {
    @Id
    private Long categoryId;
    private String categoryName;

    @OneToMany(mappedBy = "problemId", fetch = FetchType.LAZY)
    private List<Problem> problemList = new ArrayList<>();


}
