package com.chess.vishxl.Service;

import java.util.List;

import com.chess.vishxl.dto.request.UserCourseRequest;
import com.chess.vishxl.dto.response.UserCourseResponse;

public interface UserCourseService {
    UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest);
    List<UserCourseResponse> getCoursesEnrolledByUser(String userId);
    List<UserCourseResponse> getAllUserCourses(); 
}