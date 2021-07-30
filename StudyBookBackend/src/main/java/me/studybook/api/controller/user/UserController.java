package me.studybook.api.controller.user;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.dto.res.ResUserLoginDto;
import me.studybook.api.service.user.UserDestoryService;
import me.studybook.api.service.user.UserKakoLoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
@Slf4j
public class UserController {

    private UserKakoLoginService userKakoLoginService;
    private UserDestoryService userDestoryService;

    @PostMapping("/kakao-login")
    public ResponseEntity kakaoLogin(@RequestBody Map<String,String> loginDto) throws Exception {
        log.info("loginDto", loginDto);
        /**
         * 발급 받은 엑세스토큰을 서비스로 전달
         * 이 후 JWT 엑세스 토큰, 리프레시 토큰을 넘겨받아
         * 클라이언트로 응답
         */
        ResUserLoginDto userLoginDto = userKakoLoginService.kakaoLogin(loginDto.get("accessToken"));
        System.out.println(userLoginDto);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "login success!");
        responses.put("status", 200);
        responses.put("tokens", userLoginDto);

        return ResponseEntity.ok().body(responses);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity destroy(@PathVariable Long id, HttpServletRequest request) throws Exception {
        /**
         * service로 유저 아이디와 토큰 유저 아이디 주기
         * 이후 성공 반환
         */
        String _tokenId = request.getAttribute("id").toString();
        Long tokenId = Long.parseLong(_tokenId);
        System.out.println(tokenId);
        System.out.println(id);

        userDestoryService.destroy(id, tokenId);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "user delete success!");
        responses.put("status", 200);

        return ResponseEntity.ok().body(responses);
    }
}
