package com.chess.vishxl.repository;

import com.chess.vishxl.model.UserCourse;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCourseRepository extends JpaRepository<UserCourse, String> {
     List<UserCourse> findByUserId(String userId);
    // You can add custom query methods here if needed
}
