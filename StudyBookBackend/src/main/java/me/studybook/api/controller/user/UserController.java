package me.studybook.api.controller.user;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.dto.req.ReqLikeDto;
import me.studybook.api.dto.req.ReqUserEditDto;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.dto.res.ResUserDetailDto;
import me.studybook.api.dto.res.ResUserLoginDto;
import me.studybook.api.repo.post.mapper.PostLikeMapper;
import me.studybook.api.repo.post.mapper.PostsMapper;
import me.studybook.api.repo.user.mapper.UserMapper;
import me.studybook.api.service.LikeService;
import me.studybook.api.service.post.PostFindService;
import me.studybook.api.service.token.TokenService;
import me.studybook.api.service.user.UserDestoryService;
import me.studybook.api.service.user.UserDetailService;
import me.studybook.api.service.user.UserKakoLoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
@Slf4j
public class UserController {

    private UserKakoLoginService userKakoLoginService;
    private UserDestoryService userDestoryService;
    private UserDetailService userDetailService;
    private PostFindService postFindService;
    private LikeService likeService;

    @PostMapping("/kakao-login")
    public ResponseEntity kakaoLogin(@RequestBody Map<String,String> loginDto, HttpServletResponse response) throws Exception {
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
        responses.put("tokens", userLoginDto);
        responses.put("status", 200);

        return ResponseEntity.ok().body(responses);
    }

    @GetMapping("/{id}")
    public ResponseEntity show(@PathVariable Long id) throws Exception {
        /**
         * path로 받은 Id를 통해 유저 정보 응답
         */

        ResUserDetailDto user =  userDetailService.getUserDetail(id);
        List<ResPostsDto> posts = postFindService.getPostsByUserId(id);
        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "Get user detail success");
        responses.put("user", user);
        responses.put("posts", posts);
        responses.put("status", 200);

        return ResponseEntity.ok().body(responses);
    }

    @PutMapping ("/{id}")
    public ResponseEntity edit(ReqUserEditDto userEditDto, HttpServletRequest request) throws Exception {
        /**
         * path로 넘어온 회원 아이디 + 토큰을 디코딩해서 나온 id가 일치하는지 확인
         * 일치하지 않으면 403 권한 에러, 일치하면 삭제 진행
         * service를 통해 유저 수정
         * 이후 성공 반환
         */
        String _tokenId = request.getAttribute("id").toString();
        Long tokenId = Long.parseLong(_tokenId);
        TokenService.isMatched(userEditDto.getId(), tokenId);

        System.out.println(userEditDto);

        return ResponseEntity.ok().body("responses");
    }

    @PostMapping("/liked/posts")
    public ResponseEntity userLikedPost(@RequestBody ReqLikeDto likeDto) throws Exception {
        log.info("POST_LIKE");
        System.out.println(likeDto);

        String message = likeService.create(likeDto);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", message);
        responses.put("status", 200);

        return ResponseEntity.ok().body(responses);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity destroy(@PathVariable Long id, HttpServletRequest request) throws Exception {
        /**
         * path로 넘어온 회원 아이디 + 토큰을 디코딩해서 나온 id가 일치하는지 확인
         * 일치하지 않으면 403 권한 에러, 일치하면 삭제 진행
         * service를 통해 User 삭제
         * 이후 성공 반환
         */
        String _tokenId = request.getAttribute("id").toString();
        Long tokenId = Long.parseLong(_tokenId);
        TokenService.isMatched(id, tokenId);

        userDestoryService.destroy(id);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "user delete success!");
        responses.put("status", 200);

        return ResponseEntity.ok().body(responses);
    }
}
