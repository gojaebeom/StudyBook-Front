package me.studybook.api.controller;

import lombok.AllArgsConstructor;
import me.studybook.api.dto.res.ResUserLoginDto;
import me.studybook.api.service.user.UserKakoLoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private UserKakoLoginService userKakoLoginService;

    @PostMapping("/kakao-login")
    public ResponseEntity kakaoLogin(@RequestBody Map<String,String> loginDto) throws Exception {
        System.out.println(loginDto);
        /**
         * 발급 받은 엑세스토큰을 서비스로 전달
         * 이 후 JWT 엑세스 토큰, 리프레시 토큰을 넘겨받아
         * 클라이언트로 응답
         */
        ResUserLoginDto userLoginDto = userKakoLoginService.kakaoLogin(loginDto.get("accessToken"));
        System.out.println(userLoginDto);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "login success!");
        responses.put("tokens", userLoginDto);

        return ResponseEntity.ok().body(responses);
    }

}
