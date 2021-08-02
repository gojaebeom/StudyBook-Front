package me.studybook.api.controller.post;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.dto.req.ReqPostCreateDto;
import me.studybook.api.service.PostFindService;
import me.studybook.api.service.post.PostCreateService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/posts")
@Slf4j
@AllArgsConstructor
public class PostController {

    private PostFindService postsFindService;
    private PostCreateService postCreateService;


    @GetMapping("")
    public ResponseEntity index() throws Exception{
        return null;
    }

    @PostMapping("")
    public ResponseEntity create(ReqPostCreateDto postCreateDto) throws Exception {
        log.info("POST:CREATE");
        System.out.println(postCreateDto);

        postCreateService.create(postCreateDto);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "Post create success!");
        responses.put("status", 200);
        return null;
    }
}
