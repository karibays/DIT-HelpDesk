package com.springdemo.hellow.repository;

import com.springdemo.hellow.model.ProblemImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProblemImageRepository extends JpaRepository<ProblemImage, Long> {


}
