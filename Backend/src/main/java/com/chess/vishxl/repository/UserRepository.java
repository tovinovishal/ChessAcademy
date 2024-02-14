package com.chess.vishxl.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chess.vishxl.model.User;


public interface UserRepository  extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);
}
