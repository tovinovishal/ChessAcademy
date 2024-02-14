package com.chess.vishxl.Controller;

import com.chess.vishxl.Service.InstituteService;
import com.chess.vishxl.dto.request.InstituteRequest;
import com.chess.vishxl.dto.response.InstituteResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.chess.vishxl.utils.MyConstant.INSTITUTE;

import java.util.List;

@RestController
@RequestMapping(INSTITUTE)
@CrossOrigin(origins = "http://localhost:4000")
public class InstituteController {
    @Autowired

    private final InstituteService instituteService;

    public InstituteController(InstituteService instituteService) {
        this.instituteService = instituteService;
    }

    @GetMapping
    public ResponseEntity<List<InstituteResponse>> getAllInstitutes() {
        List<InstituteResponse> institutes = instituteService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

    @GetMapping("/{instituteId}")
    public ResponseEntity<InstituteResponse> getInstitute(@PathVariable Long instituteId) {
        InstituteResponse institute = instituteService.getInstituteById(instituteId);
        return ResponseEntity.ok(institute);
    }

    @PostMapping
    public ResponseEntity<InstituteResponse> createInstitute(@RequestBody InstituteRequest instituteRequest) {
        InstituteResponse createdInstitute = instituteService.createInstitute(instituteRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInstitute);
    }

    @PutMapping("/{instituteId}")
    public ResponseEntity<InstituteResponse> updateInstitute(@PathVariable Long instituteId, @RequestBody InstituteRequest instituteRequest) {
        InstituteResponse updatedInstitute = instituteService.updateInstitute(instituteId, instituteRequest);
        return ResponseEntity.ok(updatedInstitute);
    }

    @DeleteMapping("/{instituteId}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable Long instituteId) {
        instituteService.deleteInstitute(instituteId);
        return ResponseEntity.noContent().build();
    }
}
