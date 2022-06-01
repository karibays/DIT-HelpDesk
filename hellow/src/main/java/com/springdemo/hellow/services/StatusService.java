package com.springdemo.hellow.services;


import com.springdemo.hellow.dto.status.StatusReadDto;
import com.springdemo.hellow.mapper.StatusReadMapper;
import com.springdemo.hellow.repository.StatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StatusService {

    private final StatusRepository statusRepository;
    private final StatusReadMapper statusReadMapper;

    public Optional<StatusReadDto> findById(Long id){
        return statusRepository.findById(id)
                .map(statusReadMapper::map);
    }

    public List<StatusReadDto> findAll(){
        return statusRepository.findAll().stream()
                .map(statusReadMapper::map)
                .toList();
    }
}
