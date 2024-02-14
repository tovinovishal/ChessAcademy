package com.chess.vishxl.dto.request;


 
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {
     private String courseId;
     private String coursename;
     private String content;
    
}
