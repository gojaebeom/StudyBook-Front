package me.studybook.api.dto.res;

import lombok.*;

@Getter
@NoArgsConstructor
@ToString
public class ResPostsDto {
    private Long id;
    private String title;
    private String description;
    private String nickname;
    private String profile;
    private String tag;

    public ResPostsDto(Long id, String title, String description, String nickname, String profile, String tag) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.nickname = nickname;
        this.profile = profile;
        this.tag = tag;
    }
}
