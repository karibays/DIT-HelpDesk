package com.springdemo.hellow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<SocketMessage, Long> {
    List<SocketMessage> getAllByProblemId(Long problem_id);
    Optional<SocketMessage> findByProblemId(Long problem_id);
}

