package com.springdemo.hellow.services;

import com.querydsl.core.types.Predicate;
import com.springdemo.hellow.dto.filter.ProblemFilter;
import com.springdemo.hellow.dto.problem.ProblemCreateDto;
import com.springdemo.hellow.dto.problem.ProblemEditDto;
import com.springdemo.hellow.dto.problem.ProblemReadDto;
import com.springdemo.hellow.dto.useradmin.AdminCreateDto;
import com.springdemo.hellow.dto.useradmin.AdminEditDto;
import com.springdemo.hellow.dto.useradmin.AdminReadDto;
import com.springdemo.hellow.mapper.admin.AdminCreateMapper;
import com.springdemo.hellow.mapper.admin.AdminEditMapper;
import com.springdemo.hellow.mapper.admin.AdminReadMapper;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.queryDsl.QPredicates;
import com.springdemo.hellow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static com.springdemo.hellow.model.QProblem.problem;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final AdminCreateMapper adminCreateMapper;
    private final AdminReadMapper adminReadMapper;
    private final AdminEditMapper adminEditMapper;

    public User get_user_id(long barcode){
        return userRepository.getUsersByBarcode(barcode);
    }

    @Transactional
    public AdminReadDto create(AdminCreateDto userDto) {
        return Optional.of(userDto)
                .map(dto ->
                        adminCreateMapper.map(dto)
                )
                .map(userRepository::save)
                .map(adminReadMapper::map)
                .orElseThrow();
    }

    @Transactional
    public boolean delete(Long id) {
        return userRepository.findById(id)
                .map(entity -> {
                    userRepository.delete(entity);
                    userRepository.flush();
                    return true;
                })
                .orElse(false);
    }

    @Transactional
    public Optional<AdminReadDto> update(Long id, AdminEditDto adminEditDto) {
        return userRepository.findById(id)
                .map(entity -> adminEditMapper.map(adminEditDto, entity))
                .map(userRepository::saveAndFlush)
                .map(adminReadMapper::map);
    }


    public List<AdminReadDto> findAllUsersByRole() {
        return userRepository.findRoleUser().stream()
                .map(adminReadMapper::map)
                .toList();
    }

    public List<AdminReadDto> findAllAdminsByRole() {
        return userRepository.findRoleADMIN().stream()
                .map(adminReadMapper::map)
                .toList();
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getUsername(),
                        user.getPassword(),
                        Collections.singleton(user.getRole())
                ))
                .orElseThrow(() -> new UsernameNotFoundException("Failed to retrieve user: " + username));
    }

    public UserDetails loadByBarcode(Long barcode) throws UsernameNotFoundException {
        return userRepository.findByBarcode(barcode)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getUsername(),
                        user.getPassword(),
                        Collections.singleton(user.getRole())
                ))
                .orElseThrow(() -> new UsernameNotFoundException("Failed to retrieve user: " + barcode));
    }


}

