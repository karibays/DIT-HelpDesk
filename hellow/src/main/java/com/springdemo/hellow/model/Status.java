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
@Table(name = "status")
public class Status {
    @Id
    private Long statusId;
    private String statusName;
    @OneToMany(mappedBy="problemId",fetch= FetchType.LAZY)
    private List<Problem> problemList = new ArrayList<>();




}
