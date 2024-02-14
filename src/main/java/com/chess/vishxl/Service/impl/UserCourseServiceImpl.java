package com.chess.vishxl.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chess.vishxl.Service.UserCourseService;
import com.chess.vishxl.dto.request.UserCourseRequest;
import com.chess.vishxl.dto.response.UserCourseResponse;
import com.chess.vishxl.model.Course;
import com.chess.vishxl.model.UserCourse;
import com.chess.vishxl.repository.CourseRepository;
import com.chess.vishxl.repository.UserCourseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements UserCourseService {
 @Autowired
    private CourseRepository courseRepository;
    private UserCourseRepository userCourseRepository;

    @Override
    public UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest) {
        Course course = courseRepository.findByCourseName(userCourseRequest.getCourseName())
                .orElseThrow(() -> new IllegalArgumentException("Course not found with name: " + userCourseRequest.getCourseName()));

        UserCourse userCourse = new UserCourse();
        userCourse.setCourse(course);

        userCourseRepository.save(userCourse);

        return mapUserCourseToResponse(userCourse);
    }

    @Override
    public List<UserCourseResponse> getAllUserCourses() {
        List<UserCourse> userCourses = userCourseRepository.findAll();
        return userCourses.stream()
                .map(this::mapUserCourseToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public List<UserCourseResponse> getCoursesEnrolledByUser(String userId) {
        return List.of();
    }

    private UserCourseResponse mapUserCourseToResponse(UserCourse userCourses) {
        UserCourseResponse response = new UserCourseResponse();
        response.setCourseName(userCourses.getCourse().getCourseName());
        response.setContent(userCourses.getCourse().getContent());
        return response;
    }
}
