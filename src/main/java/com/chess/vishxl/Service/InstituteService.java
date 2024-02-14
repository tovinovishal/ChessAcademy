package com.chess.vishxl.Service;

import java.util.List;

import com.chess.vishxl.dto.request.InstituteRequest;
import com.chess.vishxl.dto.response.InstituteResponse;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();
    InstituteResponse getInstituteById(Long instituteId);
    InstituteResponse createInstitute(InstituteRequest instituteRequest);
    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);
    void deleteInstitute(Long instituteId);
}