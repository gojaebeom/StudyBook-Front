package me.studybook.api.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "post_categories")
@ToString
@NoArgsConstructor
@Getter
public class PostCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "name", length = 20)
    private String name;

    @Builder
    public PostCategory(Long id, User user, String name) {
        this.id = id;
        this.user = user;
        this.name = name;
    }
}
