package com.springdemo.hellow.config;

import com.springdemo.hellow.HellowApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@EnableJpaAuditing
@EnableJpaRepositories(basePackageClasses = HellowApplication.class)
@Configuration
public class AuditConfiguration {

    @Bean
    public AuditorAware<String> auditorAware(){
        return () -> Optional.of("helpdesk");
    }
}
