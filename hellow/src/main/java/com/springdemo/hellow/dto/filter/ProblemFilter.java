package com.springdemo.hellow.dto.filter;

import java.time.LocalDate;

public record ProblemFilter(
                            LocalDate dateUntil,
                            String title) {
}
