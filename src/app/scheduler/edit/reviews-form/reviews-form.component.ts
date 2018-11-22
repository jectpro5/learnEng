import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EditService} from 'shared/services/edit.service';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.css']
})
export class ReviewsFormComponent implements OnInit {
    tasks = {
        task: null,
        priority: null,
        comment: null,
        details: null,
        d4: null,
        d5: null,
        d6: null
    };
    id;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private taskService: EditService) {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.taskService.get(this.id).take(1).subscribe(t => this.tasks = t);
  }
    save(tasks) {
        if (this.id) this.taskService.update(this.id, tasks);
        else this.taskService.create(tasks);

        this.router.navigate(['/edit']);
    }

    delete() {
        if (!confirm('Are you sure you want to delete this task?')) return;
        this.taskService.delete(this.id);
        this.router.navigate(['/edit']);
    }
  ngOnInit() {
  }

}
