package com.chess.vishxl.Service.impl;

import static org.springframework.http.HttpStatus.NOT_FOUND;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.chess.vishxl.Service.CourseService;
import com.chess.vishxl.dto.request.CourseRequest;
import com.chess.vishxl.dto.response.CourseResponse;
import com.chess.vishxl.model.Course;
import com.chess.vishxl.repository.CourseRepository;

@SuppressWarnings("null")
@Service
public class CourseServiceImpl  implements CourseService {
    @Autowired

    private CourseRepository courseRepository;

    @Override
    public List<CourseResponse> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return courses.stream()
                      .map(this::mapEntityToResponse)
                      .collect(Collectors.toList());
    }

    @Override
    public CourseResponse getCourseById(Long courseId) {
        Course course = courseRepository.findById(courseId)
                                         .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Course not found with id: " + courseId));
        return mapEntityToResponse(course);
    }

    @Override
    public CourseResponse createCourse(CourseRequest courseRequest) {
        Course course = mapRequestToEntity(courseRequest);
        Course createdCourse = courseRepository.save(course);
        return mapEntityToResponse(createdCourse);
    }

    @Override
    public CourseResponse updateCourse(Long courseId, CourseRequest courseRequest) {
        Course existingCourse = courseRepository.findById(courseId)
                                                 .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Course not found with id: " + courseId));

        existingCourse.setContent(courseRequest.getContent());

        Course updatedCourse = courseRepository.save(existingCourse);
        return mapEntityToResponse(updatedCourse);
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }

    private Course mapRequestToEntity(CourseRequest courseRequest) {
        Course course = new Course();
        course.setContent(courseRequest.getContent());
        return course;
    }

    private CourseResponse mapEntityToResponse(Course course) {
        CourseResponse courseResponse = new CourseResponse();
        courseResponse.setCourseId(course.getCourseId());
        courseResponse.setContent(course.getContent());
        return courseResponse;
    }

}


