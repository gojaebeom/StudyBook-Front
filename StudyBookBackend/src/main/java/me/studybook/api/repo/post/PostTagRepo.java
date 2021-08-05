package me.studybook.api.repo.post;

import me.studybook.api.domain.PostTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostTagRepo extends JpaRepository<PostTag, Long> { }