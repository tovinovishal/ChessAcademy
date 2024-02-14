package com.chess.vishxl.Controller;

import com.chess.vishxl.Service.UserCourseService;
import com.chess.vishxl.dto.request.UserCourseRequest;
import com.chess.vishxl.dto.response.UserCourseResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.chess.vishxl.utils.MyConstant.USERCOURSE;

import java.util.List;

@RestController
@RequestMapping(USERCOURSE)
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    public UserCourseController(UserCourseService userCourseService) {
        this.userCourseService = userCourseService;
    }

    @GetMapping
    public ResponseEntity<List<UserCourseResponse>> getAllUserCourses() {
        List<UserCourseResponse> userCourses = userCourseService.getAllUserCourses();
        return ResponseEntity.ok(userCourses);
    }

    @PostMapping
    public ResponseEntity<UserCourseResponse> enrollUserInCourse(@RequestBody UserCourseRequest userCourseRequest) {
        UserCourseResponse enrolledCourse = userCourseService.enrollUserInCourse(userCourseRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(enrolledCourse);
    }
}
