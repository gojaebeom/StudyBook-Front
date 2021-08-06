package me.studybook.api.dto.res;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import me.studybook.api.repo.user.mapper.UserMapper;

import java.util.List;

@NoArgsConstructor
@ToString
@Getter
public class ResPostDetailDto {
    private Long id;
    private String title;
    private String content;
    private String publishedAt;
    private UserMapper user;
    private List<String> tags;

    @Builder
    public ResPostDetailDto(Long id, String title, String content, String publishedAt, UserMapper user, List<String> tags) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.publishedAt = publishedAt;
        this.user = user;
        this.tags = tags;
    }
}
