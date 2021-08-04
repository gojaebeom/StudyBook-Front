package me.studybook.api.dto.req;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import me.studybook.api.domain.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class ReqPostCreateDto {
    private String title;
    private String content;
    private String description;
    private String[] tags;
    private String category;
    private Long userId;

    public Post toPost(User user) {
        return Post.builder()
                .title(this.title)
                .content(this.content)
                .description(this.description)
                .user(user)
                .build();
    }

    public List<Tag> toTags() {
        List<Tag> tags = new ArrayList<>();
        for(String tag : this.tags){
            Tag t = Tag.builder()
                    .name(tag)
                    .build();
            tags.add(t);
        }
        return tags;
    }

    public List<PostTag> toPostTags(Post post, List<Tag> tags) {
        List<PostTag> postTags = new ArrayList<>();
        for(Tag tag: tags) {
            PostTag postTag = PostTag.builder()
                    .post(post)
                    .tag(tag)
                    .build();
            postTags.add(postTag);
        }
        return postTags;
    }

    public PostCategory toPostCategory(User user) {
        return  PostCategory.builder()
                .name(this.category)
                .user(user)
                .build();
    }
}
