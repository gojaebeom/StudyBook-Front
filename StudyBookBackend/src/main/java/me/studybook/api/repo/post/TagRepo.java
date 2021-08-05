package me.studybook.api.repo.post;

import me.studybook.api.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepo extends JpaRepository<Tag, Long> { }
