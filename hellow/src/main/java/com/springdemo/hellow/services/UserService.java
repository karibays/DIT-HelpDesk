package com.springdemo.hellow.services;

import com.springdemo.hellow.dto.barcode.BarcodeUserDto;
import com.springdemo.hellow.dto.barcode.UserIdDto;
import com.springdemo.hellow.dto.useradmin.AdminCreateDto;
import com.springdemo.hellow.dto.useradmin.AdminEditDto;
import com.springdemo.hellow.dto.useradmin.AdminReadDto;
import com.springdemo.hellow.mapper.BarcodeUserMapper;
import com.springdemo.hellow.mapper.UserIdMapper;
import com.springdemo.hellow.mapper.admin.AdminCreateMapper;
import com.springdemo.hellow.mapper.admin.AdminEditMapper;
import com.springdemo.hellow.mapper.admin.AdminReadMapper;
import com.springdemo.hellow.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final AdminCreateMapper adminCreateMapper;
    private final AdminReadMapper adminReadMapper;
    private final AdminEditMapper adminEditMapper;
    private final BarcodeUserMapper barcodeUserMapper;
    private final UserIdMapper userIdMapper;

    public Optional<UserIdDto> get_user_id(long barcode){
        return userRepository.getUsersByBarcode(barcode)
                .map(userIdMapper::map);
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

    public Optional<BarcodeUserDto> findByBarcode(Long barcode) {
        return userRepository.findByBarcode(barcode)
                .map(barcodeUserMapper::map);
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

