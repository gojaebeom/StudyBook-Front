package me.studybook.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "posts")
@NoArgsConstructor
@Getter
@ToString
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", length = 50, nullable = false)
    private String title;

    @Column(name = "content", columnDefinition="LONGTEXT")
    private String content;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private PostCategory postCategory;

    @Builder
    public Post(Long id, String title, String content, User user, PostCategory postCategory) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.user = user;
        this.postCategory = postCategory;
    }
}
