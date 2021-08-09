package me.studybook.api.dto.res;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import me.studybook.api.domain.User;
import me.studybook.api.repo.post.mapper.PostsMapper;
import me.studybook.api.repo.user.mapper.UserMapper;

import java.util.List;

@Getter
@ToString
public class ResUserDetailDto {
    private Long id;
    private String nickname;
    private String profile;

    @Builder
    public ResUserDetailDto(Long id, String nickname, String profile) {
        this.id = id;
        this.nickname = nickname;
        this.profile = profile;
    }

    public static ResUserDetailDto of(User user) {
        return ResUserDetailDto.builder()
                .id(user.getId())
                .nickname(user.getNickname())
                .profile(user.getProfile())
                .build();
    }
}
